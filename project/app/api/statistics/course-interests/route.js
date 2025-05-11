import { PrismaClient } from '@/app/generated/prisma';

const prisma = new PrismaClient();

export async function GET() {
  try {
    const publishedCourses = await prisma.publishedCourse.findMany({
      where: {
        interests: {
          some: {
            user: {
              role: 'Instructor',
            },
          },
        },
      },
      include: {
        course: true, // get the actual course name, code, etc.
        interests: {
          where: {
            user: {
              role: 'Instructor',
            },
          },
          include: {
            user: {
              select: {
                id: true,
                name: true,
                email: true,
              },
            },
          },
        },
      },
    });

    const result = publishedCourses.map((pubCourse) => ({
      publishedCourseId: pubCourse.id,
      courseCode: pubCourse.course.code,
      courseName: pubCourse.course.name,
      semester: pubCourse.semester,
      year: pubCourse.year,
      deadline: pubCourse.deadline,
      interestedInstructors: pubCourse.interests.map((interest) => ({
        id: interest.user.id,
        name: interest.user.name,
        email: interest.user.email,
        interestStatus: interest.status,
      })),
    }));

    return new Response(JSON.stringify(result), { status: 200 });
  } catch (error) {
    console.error('Error fetching published courses interests:', error);
    return new Response(JSON.stringify({ error: 'Failed to load data' }), {
      status: 500,
    });
  }
}
