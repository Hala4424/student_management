const { PrismaClient } = require("../app/generated/prisma");

const fs = require("fs");
const path = require("path");

const prisma = new PrismaClient();

async function loadJSON(filePath) {
  const fullPath = path.join(__dirname, "..", "data", filePath);
  const data = fs.readFileSync(fullPath, "utf-8");
  return JSON.parse(data);
}

async function main() {
  const users = await loadJSON("../data/users.json");
  const courses = await loadJSON("../data/courses.json");
  const prerequisites = await loadJSON("../data/prerequisite.json");
  const classes = await loadJSON("../data/classes.json");
  const publishedCourses = await loadJSON("../data/published.json");
  const inProgress = await loadJSON("../data/inProgressCourses.json");
  const completedCourses = await loadJSON("../data/completedCourses.json");



  for (const course of courses) {
    await prisma.course.create({
      data: course,
    });
  }


  console.log("courses uploaded successfully......");

  for (const user of users) {
    await prisma.user.create({
      data: user,
    });
  }

  console.log("users uploaded successfully......");

  

  for (const pre of prerequisites) {
    await prisma.prerequisite.create({
      data: pre,
    });
  }
  console.log("prerequesits uploaded successfully......");

  for (const cls of classes) {
    await prisma.class.create({
      data: cls,
    });
  }

  console.log("classes uploaded successfully......");
  for (const course of publishedCourses) {
    await prisma.publishedCourse.create({
      data: {
        ...course,
        deadline: new Date(course.deadline),
      },
    });
  }

  console.log("publishedCourses uploaded successfully......");

  for (const course of inProgress) {
    await prisma.inProgressCourse.create({
      data: course,
    });
  }

  console.log("inProgress Json uploaded successfully......");

  for (const course of completedCourses) {
    await prisma.completedCourse.create({
      data: course,
    });
  }

  console.log("completedCourses uploaded successfully......");

  // You can extend this similarly for classes, prerequisites, publishedCourses etc.
  console.log("Seed complete with JSON data.");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
