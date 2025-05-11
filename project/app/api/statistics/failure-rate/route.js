import { PrismaClient } from '@/app/generated/prisma';

const prisma = new PrismaClient();

export async function GET() {
  try {
    const completedCourses = await prisma.completedCourse.findMany({
      where: {
        grade: {
          not: null,
        },
      },
      include: {
        class: {
          include: {
            course: true,
          },
        },
      },
    });

    const courseStats = {};

    completedCourses.forEach((record) => {
      const courseId = record.class.course.id;
      const courseCode = record.class.course.code;
      const courseName = record.class.course.name;
      const grade = record.grade;

      if (!courseStats[courseId]) {
        courseStats[courseId] = {
          courseId,
          courseCode,
          courseName,
          total: 0,
          failures: 0,
        };
      }

      courseStats[courseId].total += 1;
      if (grade === 'F') {
        courseStats[courseId].failures += 1;
      }
    });

    const result = Object.values(courseStats).map((course) => {
      const failureRate = course.total > 0
        ? ((course.failures / course.total) * 100).toFixed(2)
        : '0.00';

      return {
        courseCode: course.courseCode,
        courseName: course.courseName,
        totalCompleted: course.total,
        totalFailures: course.failures,
        failureRate: `${failureRate}%`,
      };
    });

    return new Response(JSON.stringify(result), { status: 200 });
  } catch (error) {
    console.error(error);
    return new Response(
      JSON.stringify({ error: 'Failed to calculate failure rate' }),
      { status: 500 }
    );
  }
}
