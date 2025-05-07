import { PrismaClient } from '@/app/generated/prisma';

const prisma = new PrismaClient();

export async function GET(req, res) {
  try {
    // Fetch classes grouped by course and year
    const coursesWithClasses = await prisma.course.findMany({
      include: {
        classes: {
          select: {
            semester: true,
            year: true,
            availableSeats: true,
            instructor: {
              select: {
                name: true,
                email: true,
              },
            },
          },
        },
      },
    });

    // Organize the data by course and year
    const organizedData = coursesWithClasses.map((course) => {
      const classesPerYear = {};

      course.classes.forEach((classItem) => {
        if (!classesPerYear[classItem.year]) {
          classesPerYear[classItem.year] = [];
        }
        classesPerYear[classItem.year].push({
          semester: classItem.semester,
          availableSeats: classItem.availableSeats,
          instructorName: classItem.instructor.name,
          instructorEmail: classItem.instructor.email,
        });
      });

      return {
        courseCode: course.code,
        courseName: course.name,
        classesByYear: classesPerYear,
      };
    });

    return new Response(JSON.stringify(organizedData), { status: 200 });
  } catch (error) {
    console.error('Error fetching courses and classes:', error);
    new Response(
      JSON.stringify({ error: 'Failed to fetching courses and classes:' }),
      { status: 500 }
    );
  }
}
