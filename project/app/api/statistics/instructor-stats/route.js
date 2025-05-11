import { PrismaClient } from '@/app/generated/prisma';

const prisma = new PrismaClient();

export async function GET() {
  try {
    const instructors = await prisma.user.findMany({
      where: {
        role: 'Instructor',
      },
      include: {
        classes: {
          include: {
            inProgressBy: true,
            completedBy: true,  // completedBy has "grade" field now
          },
        },
      },
    });

    const instructorStats = instructors.map(instructor => {
      const totalCourses = instructor.classes.length;

      const totalStudents = instructor.classes.reduce(
        (acc, classData) => acc + classData.studentEnrolled,
        0
      );

      const totalTaughtStudents = instructor.classes.reduce(
        (acc, classData) => acc + classData.completedBy.length,
        0
      );

      // Count completed and in-progress classes
      const completedClasses = instructor.classes.filter(
        (classData) => classData.completedBy.length > 0
      ).length;

      const inProgressClasses = instructor.classes.filter(
        (classData) => classData.inProgressBy.length > 0
      ).length;

      // Calculate passed and failed based on Grade
      let passedStudents = 0;
      let failedStudents = 0;

      instructor.classes.forEach(classData => {
        classData.completedBy.forEach(completedRecord => {
          if (completedRecord.grade && completedRecord.grade.toUpperCase() === 'F') {
            failedStudents++;
          } else {
            passedStudents++;
          }
        });
      });

      return {
        name: instructor.name,
        totalCourses,
        totalStudents,
        totalTaughtStudents,
        completedClasses,
        inProgressClasses,
        passedStudents,
        failedStudents,
      };
    });

    // Sort by totalCourses descending
    instructorStats.sort((a, b) => b.totalCourses - a.totalCourses);

    return new Response(JSON.stringify(instructorStats), { status: 200 });
  } catch (error) {
    console.error('Error fetching instructor stats:', error);
    return new Response(
      JSON.stringify({ error: 'Failed to load instructor data' }),
      { status: 500 }
    );
  }
}
