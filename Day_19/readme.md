# Data Validation in MongoDB with Mongoose

## What is Data Validation?
Data validation is the process of ensuring that the data entered into the database is correct, formatted properly, and does not cause any issues.

### Why Do We Need Data Validation?
If we don't validate the data, users might enter invalid or extremely large data, which can:
- Harm the database
- Cause performance issues
- Lead to incorrect information being stored

### Example Without Validation
```javascript
const userSchema = new Schema({
    name: String,
    age: Number,
    city: String,
    gender: String
});
```
Here, we haven't added any validation. If someone enters a name with 100,000 characters, it will be stored in the database, leading to problems.

## Mongoose CRUD Operations
In Mongoose, we can perform CRUD operations using the following methods:
- `User.create(data)`: Inserts a new document into the database
- `User.find()`: Retrieves all documents
- `User.findById(ID)`: Finds a specific document by ID
- `User.findByIdAndDelete(ID)`: Deletes a document by ID
- `User.findByIdAndUpdate(ID, update)`: Updates a document by ID

## Schema Validation
Validation ensures that only valid data gets stored in the database.

### Example: Age Restriction
For Instagram, users must be at least 14 years old:
```javascript
const userSchema = new Schema({
    age: { type: Number, min: 14 }
});
```
If a user under 14 tries to register, they will receive an error.

### Other Validation Options
- `max: 70`: Users above 70 cannot register
- `required: true`: Ensures the field is mandatory
- `unique: true`: Ensures uniqueness (e.g., email should be unique)
- `minLength` & `maxLength`: Restrict string length
- `default`: Set a default value
- `trim: true`: Removes extra spaces
- `lowercase: true`: Converts input to lowercase

### Enum Validation
Restrict values to a predefined list. Example:
```javascript
gender: {
    type: String,
    enum: ["male", "female", "others"]
}
```
If a user enters an invalid gender, they will receive an error.

### Custom Validator Function
```javascript
gender: {
    type: String,
    validate(value) {
        if (!["male", "female", "others"].includes(value)) {
            throw new Error("Invalid Gender");
        }
    }
}
```

## Validating Data on Update
By default, Mongoose does not validate data when updating. To enforce validation, use `runValidators: true`.

Example:
```javascript
app.patch("/user", async (req, res) => {
    try {
        const { _id: id, ...update } = req.body;
        await User.findByIdAndUpdate(id, update, { runValidators: true });
        res.send("Updated Successfully");
    } catch (err) {
        res.send("Error " + err.message);
    }
});
```

## Timestamps
Tracking when a document is created or updated:
```javascript
const userSchema = new Schema({}, { timestamps: true });
```

## Immutable Fields
Prevents a field from being changed after creation:
```javascript
email: {
    type: String,
    immutable: true
}
```
If a user tries to change their email, it won't update but also won't show an error. To enforce an error, add API-level validation.

## API-Level Validation
Instead of validating in the database, we can validate data before sending it to the database. This helps in:
1. **Reducing Database Calls** (which saves costs)
2. **Improving User Experience** (immediate error feedback)

Example:
```javascript
app.post("/register", (req, res) => {
    const { name, email, age } = req.body;
    if (!name || !email || age < 14) {
        return res.status(400).send("Invalid Data");
    }
    // Proceed with database insertion
});
```

## Conclusion
Using schema-level and API-level validation ensures data integrity, saves database costs, and improves user experience.

