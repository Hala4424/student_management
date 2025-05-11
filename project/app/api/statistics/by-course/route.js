import { PrismaClient } from '@/app/generated/prisma';

const prisma = new PrismaClient();

export async function GET() {
  try {
    // Fetch courses along with their instructor and student enrollment data
    const courses = await prisma.course.findMany({
      include: {
        classes: {
          include: {
            instructor: {
              select: { name: true },
            },
          },
        },
      },
    });

    

    // Map through courses to create an easily readable format
    const courseData = courses.map(course => ({
      name: course.name,
      category: course.category,
      instructor: course.classes[0]?.instructor?.name || 'No Instructor', // Assuming the first class for the course
      studentsEnrolled: course.classes.reduce((acc, classData) => acc + classData.studentEnrolled, 0),
    }));
    // console.log(courseData);
    return new Response(JSON.stringify(courseData), { status: 200 });
  } catch (error) {
    console.error('Error fetching courses:', error);
    return new Response(
      JSON.stringify({ error: 'Failed to load course data' }),
      { status: 500 }
    );
  }
}
