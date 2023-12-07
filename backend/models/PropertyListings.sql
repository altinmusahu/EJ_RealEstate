CREATE TABLE PropertyListings (
    ListingID INT PRIMARY KEY IDENTITY,
    PropertyID INT,
    AgentID INT,
    ListedDate DATETIME DEFAULT GETDATE(),
    FOREIGN KEY (PropertyID) REFERENCES Properties(PropertyID),
    FOREIGN KEY (AgentID) REFERENCES RealEstateAgents(AgentID)
);