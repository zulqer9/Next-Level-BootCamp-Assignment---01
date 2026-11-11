# 3. What is Type Narrowing in TypeScript? Practical Examples with typeof, instanceof, and in

## Introduction

In TypeScript, we can store multiple data types in a single variable or function parameter by using a union type. However, when a variable has multiple possible types, we cannot directly run methods that only work on one specific type. By applying the type narrowing concept, we can check the exact type of a variable before calling its method. There are several ways to narrow down types in TypeScript, and here we will discuss three practical techniques.

## Detailed Body and Code Examples

### 1. The `typeof` Operator
First, the `typeof` operator checks if a value is a primitive data type like a `string`, `number`, or `boolean`. Keep in mind that for `null` and arrays, `typeof` returns `"object"`, so it works best for basic primitives.

```typescript
const formatOrderInput = (val: string | number) => {
  if (typeof val === "string") {
    return val.trim().toUpperCase();
  }
  return val.toFixed(2);
};
```

Here, we narrow `val` to check whether it is a string or a number. Depending on the data type, our function performs a different action. If `val` is a string, it removes extra spaces and converts the text to uppercase, and if it is a number, it formats the value up to two decimal places.

### 2. The `instanceof` Operator
Second, we use the `instanceof` operator when working with classes. By applying `instanceof`, we check whether an object was created from a specific class or not. If the check returns true, TypeScript knows the object belongs to that exact class.

```typescript
class VideoFile {
  playVideo() {
    return "Playing MP4 video...";
  }
}

class AudioFile {
  playAudio() {
    return "Playing MP3 audio...";
  }
}

function openMedia(file: VideoFile | AudioFile) {
  if (file instanceof VideoFile) {
    return file.playVideo();
  }
  return file.playAudio();
}
```

In the `openMedia` function, we check if the `file` object comes from the `VideoFile` class. If it matches, it plays the video; otherwise, it plays the audio track.

### 3. The `in` Operator
Third, plain objects do not come from classes, so `instanceof` will not work on them. To check if a specific property exists inside a plain object, we need to use the `in` operator.

```typescript
type Developer = { writeCode: () => void };
type Designer = { createDesign: () => void };

function assignTask(member: Developer | Designer) {
  if ("writeCode" in member) {
    member.writeCode();
  } else {
    member.createDesign();
  }
}
```

Here, the code checks which object contains the `writeCode` property inside `member`. Since `writeCode` belongs to the `Developer` type, TypeScript safely runs that method.

## Conclusion

By applying these type narrowing techniques, we can avoid runtime crashes, reduce bugs, and keep our program completely type-safe.