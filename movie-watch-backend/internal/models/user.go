package model

import (
	"time"

	"go.mongodb.org/mongo-driver/bson/primitive"
)

type User struct {
	ID             primitive.ObjectID `json:"user_id,omitempty" bson:"_id,omitempty"`
	Email          string             `json:"email" bson:"email" validate:"required,email"`
	EmailVerified  bool               `json:"email_verified" bson:"email_verified"`
	PasswordHash   string             `json:"-" bson:"password_hash,omitempty" validate:"required"`
	UserName       string             `json:"user_name" bson:"user_name" validate:"required"`
	GoogleId       string             `json:"-" bson:"google_id,omitempty"`
	ProfilePicture string             `json:"profile_picture,omitempty" bson:"profile_picture"`
	CreatedAt      time.Time          `json:"created_at" bson:"created_at"`
	LastLogin      time.Time          `json:"last_login,omitempty" bson:"last_login"`
}
