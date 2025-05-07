import { PrismaClient } from '@/app/generated/prisma';

const prisma = new PrismaClient();

export async function GET() {
  try {
    const grouped = await prisma.class.groupBy({
      by: ['courseId'],
      _sum: {
        studentEnrolled: true,
      },
      orderBy: {
        _sum: {
          studentEnrolled: 'desc',
        },
      },
      take: 10, 
    });

    const topCourses = await Promise.all(
      grouped.map(async (entry) => {
        const course = await prisma.course.findUnique({
          where: { id: entry.courseId },
        });

        return {
          courseId: course.id,
          name: course.name,
          code: course.code,
          students: entry._sum.studentEnrolled || 0,
        };
      })
    );

    return new Response(JSON.stringify(topCourses), { status: 200 });
  } catch (error) {
    console.error('[TopCourses API ERROR]', error);
    return new Response(JSON.stringify({ error: 'Failed to fetch top courses' }), {
      status: 500,
    });
  }
}
