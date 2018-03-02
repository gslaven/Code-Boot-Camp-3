console.log("My JSON.JS file loaded");

let classRoom =
{
  "numberOfStudents":8,
  "chalkBoardsClean": false,
  "computers":
  {
    "computer1": "on",
    "computer2": "off"
  }
}

cleanchalkBoards = () =>
{
  console.log(classRoom);
  classRoom.chalkBoardsClean = true;
  console.log(classRoom);
}
