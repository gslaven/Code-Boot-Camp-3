console.log("My JSONHouse.JS file loaded");

let house =
{
  "Clean": true,
  "AlarmSystem": true,
  "Rented": false,
  "Rooms": {
    "MasterBedroom":
    {
      "Clean": false,
      "NumberOfWindows": 2,
      "Windows":
      {
        "NorthWindow":
        {
          "Clean": false,
          "Size": "4' x 8'",
          "Status": "Needs Replacing"
        },
        "WestWindow":
        {
          "Clean": true,
          "Size": "4' x 8'",
          "Status": "OK"
        }
      }
    },
    "MasterBathroom":
    {
      "Clean": true,
      "NumberOfWindows": 2,
      "Windows":
      {
        "NorthWindow":
        {
          "Clean": true,
          "Size": "4' x 4'",
          "Status": "Needs Replacing at dsome point, not critical"
        },
        "EastWindow":
        {
          "Clean": false,
          "Size": "4' x 4'",
          "Status": "OK"
        }
      }
    },
    "LivingRoom":
    {
      "Clean": true,
      "NumberOfWindows": 3,
      "Windows":
      {
        "WestWindow":
        {
          "Clean": false,
          "Size": "4' x 8'",
          "Status": "OK"
        },
        "SouthWestWindow":
        {
          "Clean": true,
          "Size": "4' x 8'",
          "Status": "OK"
        },
        "SouthEastWindow":
        {
          "Clean": true,
          "Size": "4' x 8'",
          "Status": "Fogged Up a little.  Seal must be bad."
        }
      }
    },
    "Kitchen":
    {
      "Clean": true,
      "NumberOfWindows": 2,
      "Windows":
      {
        "SouthWindow":
        {
          "Clean": true,
          "Size": "4' x 8'",
          "Status": "OK"
        },
        "EastWindow":
        {
          "Clean": true,
          "Size": "4' x 4'",
          "Status": "OK"
        }
      }
    }
  }
}
console.log(house);

logPrintRooms = () =>
{
  for (let room in house.Rooms)
  {
    console.log(room + " # of Windows " + house.Rooms[room].NumberOfWindows);
  }
}

logPrintWindowsCleanStatus = () =>
{
  for (let room in house.Rooms)
  {
    for (let wind in house.Rooms[room].Windows)
    {
      console.log(
        wind + " is clean?: " +
        house.Rooms[room].Windows[wind].Clean);
      }
    }
  }

  cleanWindows = () =>
  {
    for (let room in house.Rooms)
    {
      for (let wind in house.Rooms[room].Windows)
      {
        house.Rooms[room].Windows[wind].Clean = true;
      }
    }
  }

  logPrintRooms();

  logPrintWindowsCleanStatus();

  cleanWindows();

  logPrintWindowsCleanStatus()
