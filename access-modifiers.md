# 5. How Access Modifiers (public, private, protected, and readonly) Work in TypeScript OOP

## Introduction

In Object-Oriented Programming (OOP), a class acts like a blueprint that we use to create multiple objects. Normally, any property or method inside a class can be accessed and changed from anywhere in the code. To control this behavior and protect our data, we use access modifiers in TypeScript. TypeScript gives us a few different modifiers, and here we will look at how they work.

## Detailed Body and Code Examples

* **Public:** Every property and method is `public` by default if we do not write any modifier. We can read and change a `public` member from inside the class, inside child classes, or completely outside the class.

* **Private:** A `private` member can only be used inside the exact parent class where it is defined. It cannot be read or modified from outside that class or even from a child class. This is very useful when we want to keep sensitive data secure.

* **Protected:** A `protected` member also stays hidden from outside code, except it can be used inside both the parent class and any child class.

* **Readonly:** Once we set a `readonly` property in the declaration or constructor, its value remains fixed forever. Nobody can change that property's value from anywhere at any time after the object is created.

```
class Employee {
  constructor(
  public readonly empId: number,
  public name: string,
  private salary: number,
  protected department: string = "Engineering"
) {}

  public getSalary() {
    return this.salary;
  }
}

class Manager extends Employee {
  public getDepartmentInfo() {
    return `${this.name} leads the ${this.department} team.`;
  }
}

```

In this example, anyone can read `empId` and `name` outside the class because both are `public`. However, nobody can update `empId` later because it is marked as `readonly`. Meanwhile, `salary` stays locked inside `Employee`, while `department` can still be used inside the `Manager` child class.

## Conclusion

By using these four modifiers properly, we can keep our class data organized and safe from accidental changes.