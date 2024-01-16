CREATE TABLE Properties (
    PropertyID INT PRIMARY KEY IDENTITY,
    PropertyName NVARCHAR(100) NOT NULL,
    PropertyTypeID INT,
    Price DECIMAL(18, 2) NOT NULL,
    Description NVARCHAR(MAX),
    Address NVARCHAR(255) NOT NULL,
    City NVARCHAR(100) NOT NULL,
    Bedrooms INT,
    Bathrooms INT,
    SquareFeet DECIMAL(18, 2),
    IsAvailable BIT DEFAULT 1,
    CreatedAt DATETIME DEFAULT GETDATE(),
    Image NVARCHAR(255),
    FOREIGN KEY (PropertyTypeID) REFERENCES PropertyTypes(PropertyTypeID)
);