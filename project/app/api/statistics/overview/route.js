import { PrismaClient } from '@/app/generated/prisma';

const prisma = new PrismaClient();

export async function GET() {
  try {
    const totalStudents = await prisma.user.count({ where: { role: 'Student' } });
    const totalInstructors = await prisma.user.count({ where: { role: 'Instructor' } });
    const totalCourses = await prisma.course.count();
    const courseCategories = await prisma.course.groupBy({ by: ['category'] });
    const totalClasses = await prisma.class.count();

    return new Response(
      JSON.stringify({
        totalStudents,
        totalInstructors,
        totalCourses,
        courseCategories: courseCategories.length,
        totalClasses,
      }),
      { status: 200 }
    );
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ error: 'Failed to load stats' }), { status: 500 });
  }
}
