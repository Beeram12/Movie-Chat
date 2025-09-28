package models

import (
	"time"

	"go.mongodb.org/mongo-driver/bson/primitive"
)

type User struct {
	ID           primitive.ObjectID `bson:"_id,omitempty"`
	Name         string             `bson:"username"`
	Email        string             `bson:"email"`
	PasswordHash string             `bson:"passwordHash"`
	CreatedAt    time.Time          `bson:"createdAt"`
}
