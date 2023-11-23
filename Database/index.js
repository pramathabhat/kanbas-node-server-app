// import courses from "./courses.json" assert { type: "json" };
// import modules from "./modules.json" assert { type: "json" };
// import assignments from "./assignments.json" assert { type: "json" };
// import users from "./users.json" assert { type: "json" };
// import grades from "./grades.json" assert { type: "json" };
// import enrollments from "./enrollments.json" assert { type: "json" };
// export default {
//   courses,
//   modules,
//   assignments,
//   users,
//   grades,
//   enrollments,
// };
import assert from "assert";
import courses from "./courses.json" assert { type: "json" };
import modules from "./modules.json" assert { type: "json" };
import assignments from "./assignments.json" assert { type: "json" };
import users from "./users.json" assert { type: "json" };
import grades from "./grades.json" assert { type: "json" };
import enrollments from "./enrollments.json" assert { type: "json" };

assert.strictEqual(typeof courses, "object");
assert.strictEqual(typeof modules, "object");
assert.strictEqual(typeof assignments, "object");
assert.strictEqual(typeof users, "object");
assert.strictEqual(typeof grades, "object");
assert.strictEqual(typeof enrollments, "object");

export default {
  courses,
  modules,
  assignments,
  users,
  grades,
  enrollments,
};
