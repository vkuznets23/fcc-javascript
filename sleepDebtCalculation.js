const getSleepHours = (day) => {
    day = day.toLowerCase();
    if (day === 'monday')
      return Math.floor(Math.random() * 9 + 3);
    else if (day === 'tuesday')
      return Math.floor(Math.random() * 9 + 3);
    else if (day === 'wednesday')
      return Math.floor(Math.random() * 9 + 3);
    else if (day === 'thursday')
      return Math.floor(Math.random() * 9 + 3);
    else if (day === 'friday')
      return Math.floor(Math.random() * 9 + 3);
    else if (day === 'saturday')
      return Math.floor(Math.random() * 9 + 5);
    else if (day === 'sunday')
      return Math.floor(Math.random() * 9 + 5);
  }
  
  const getActualSleepHours = () => {
    const monday = getSleepHours('monday');
    const tuesday = getSleepHours('tuesday');
    const wednesday = getSleepHours('wednesday');
    const thursday = getSleepHours('thursday');
    const friday = getSleepHours('friday');
    const saturday = getSleepHours('saturday');
    const sunday = getSleepHours('sunday');
    const total = monday + tuesday + wednesday + thursday + friday + saturday + sunday;
    return total;
  }
  
  const getIdealSleepHours = () => {
    const idealHours = 7;
    return idealHours * 7;
  }
  
  const calculateSleepDebt = () => {
    actualSleepHours = getActualSleepHours();
    idealSleepHours = getIdealSleepHours();
  
    if (actualSleepHours === idealSleepHours) 
      console.log("the user got the perfect amount of sleep");
    else if (actualSleepHours > idealSleepHours)
      console.log(`the user got ${actualSleepHours - idealSleepHours} more sleep than needed`);
    else if (actualSleepHours < idealSleepHours)
      console.log(`the user should get some rest, ${idealSleepHours - actualSleepHours} more hours`);
  }
  
  calculateSleepDebt();