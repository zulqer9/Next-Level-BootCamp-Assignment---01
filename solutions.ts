const multiplyValue = (value: number, multiplier?: number) : number => {
  if (multiplier || multiplier == 0) {
    return value * multiplier;
  } else {
    return value * 2;
  }
};


const processInput = (value: string | number | boolean) : string | number => {
  if (typeof value === "string") {
    return value.trim().toLowerCase();
  } else if (typeof value === "number") {
    return value * 10;
  }
  else {
    if (typeof value === "boolean" && !value) {
      return "Inactive";
    } else {
      return "Active";
    }
  }
};

const formatCoordinate = (
  location: readonly [
    latitude: number,
    longitude: number,
    locationName: string,
  ],
) : string => {
  const [lat, long, loc] = location;
  return `Location: ${loc} (${lat}, ${long})`;
};

const concatenateArrays = <T>(...arrays: T[][]) : T[] => {
  const result: T[] = [];
  for (const arr of arrays) {
    result.push(...arr);
  }
  return result;
};

interface Course {
  title: string;
  students: number;
  isPublished: boolean;
}

const getPopularCourses = (courses: Course[], minStudents: number) : Course[] => {
  const result: Course[] = [];
  for (const c of courses) {
    if (c.isPublished && c.students >= minStudents) {
      result.push(c);
    }
  }
  return result;
};

const pluckValues = <T, K extends keyof T>(items: T[], key: K): T[K][] => {
  return items.map((item) => item[key]);
};

class Employee {
  constructor(
    protected name: string,
    private baseSalary: number,
  ) {}

  getDetails() : string {
    return `Employee: ${this.name}, Base Salary: ${this.baseSalary}`;
  }
}

class Manager extends Employee {
  constructor(
    name: string,
    baseSalary: number,
    private department: string,
  ) {
    super(name, baseSalary);
  }

  getRoleInfo() : string {
    return `Manager of ${this.department}: ${this.name}`;
  }
}

const validateAgeAsync = async(age: number): Promise<string> => {
  return new Promise((resolved, reject) => {
    if (age >= 18) {
      setTimeout(() => {
        resolved("Access Granted");
      }, 1000);
    } else {
      reject(new Error("Access Denied: Must be 18 or older"));
    }
  });
};
