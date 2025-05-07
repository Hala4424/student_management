import { PrismaClient } from '@/app/generated/prisma';

const prisma = new PrismaClient();

const gradeToNumeric = (grade) => {
  switch (grade) {
    case 'A': return 4;
    case 'B': return 3;
    case 'C': return 2;
    case 'D': return 1;
    case 'F': return 0;
    default: return null;
  }
};

const numericToGrade = (avg) => {
  if (avg >= 3.5) return 'A';
  if (avg >= 2.5) return 'B';
  if (avg >= 1.5) return 'C';
  if (avg >= 0.5) return 'D';
  return 'F';
};

export async function GET() {
  try {
    const completedCourses = await prisma.completedCourse.findMany({
      include: {
        class: {
          include:{
            course: true,
          }
        },
      },
    });

      const courseGrades = completedCourses.reduce((acc, completedCourse) => {
      const courseName = completedCourse.class.course.name;
      const grade = completedCourse.grade;
      const numeric = gradeToNumeric(grade);

      if (!acc[courseName]) {
        acc[courseName] = { total: 0, count: 0 };
      }

      if (numeric !== null) {
        acc[courseName].total += numeric;
        acc[courseName].count += 1;
      }

      return acc;
    }, {});

    const result = Object.entries(courseGrades).map(([courseName, { total, count }]) => {
      const averageNumeric = total / count;
      const averageLetter = numericToGrade(averageNumeric);
      return { courseName, averageGrade: averageLetter };
    });

    return new Response(JSON.stringify(result), { status: 200 });
  } catch (error) {
    console.error('Error:', error);
    return new Response(JSON.stringify({ error: 'Something went wrong' }), { status: 500 });
  }
}
