package model

import (
	"time"

	"go.mongodb.org/mongo-driver/bson/primitive"
)

type User struct {
	ID             primitive.ObjectID `json:"id,omitempty" bson:"_id,omitempty"`
	Email          string             `json:"email" bson:"email" validate:"required,email"`
	Password       string             `json:"-" bson:"password_hash,omitempty" validate:"required"`
	UserName       string             `json:"user_name" bson:"user_name" validate:"required"`
	ProfilePicture string             `json:"profile_picture" bson:"profile_picture"`
	CreatedAt      time.Time          `json:"created_at" bson:"created_at"`
	UpdatedAt      time.Time          `json:"updated_at" bson:"updated_at"`
}
