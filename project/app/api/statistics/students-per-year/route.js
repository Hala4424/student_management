import { PrismaClient } from '@/app/generated/prisma';

const prisma = new PrismaClient();

export async function GET() {
  try {
    // Fetch total students grouped by year and semester
    const grouped = await prisma.class.groupBy({
      by: ['year', 'semester'],
      _sum: {
        studentEnrolled: true,
      },
      orderBy: [
        { year: 'asc' },
        { semester: 'asc' }
      ]
    });

    // Format data
    const result = grouped.map((g) => ({
      year: g.year,
      semester: g.semester,
      students: g._sum.studentEnrolled || 0,
    }));

    return new Response(JSON.stringify(result), { status: 200 });
  } catch (error) {
    console.error('[StudentsPerYear API ERROR]', error);
    return new Response(JSON.stringify({ error: 'Failed to fetch students per year' }), {
      status: 500,
    });
  }
}
