import { PrismaClient } from '@/app/generated/prisma';

const prisma = new PrismaClient();

export async function GET() {
  try {
    // Step 1: Get all courses and extract categories manually
    const allCourses = await prisma.course.findMany({
      select: {
        id: true,
        category: true,
      },
    });

    const categoryMap = {};

    for (const course of allCourses) {
      if (!categoryMap[course.category]) {
        categoryMap[course.category] = [];
      }
      categoryMap[course.category].push(course.id);
    }

    const result = [];

    for (const category in categoryMap) {
      const courseIds = categoryMap[category];

      // Step 2: Get classes for these courses
      const classes = await prisma.class.findMany({
        where: {
          courseId: { in: courseIds },
        },
        select: {
          id: true,
        },
      });

      const classIds = classes.map((cls) => cls.id);

      // Step 3: Get students from completed & in-progress courses
      const completed = await prisma.completedCourse.findMany({
        where: { classId: { in: classIds } },
        select: { userId: true },
        distinct: ['userId'],
      });

      const inProgress = await prisma.inProgressCourse.findMany({
        where: { classId: { in: classIds } },
        select: { userId: true },
        distinct: ['userId'],
      });

      const studentSet = new Set();
      completed.forEach((entry) => studentSet.add(entry.userId));
      inProgress.forEach((entry) => studentSet.add(entry.userId));

      result.push({
        category,
        totalCourses: courseIds.length,
        totalStudents: studentSet.size,
      });
    }

    return new Response(JSON.stringify(result), { status: 200 });
  } catch (error) {
    console.error('Error generating category stats:', error);
    return new Response(JSON.stringify({ error: 'Internal Server Error' }, { status: 500 }));
  }
}
