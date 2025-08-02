package user

import (
	"context"

	"go.mongodb.org/mongo-driver/bson/primitive"
)

type User interface {
	CreateUser(ctx context.Context, user *User) error
	GetUserById(ctx context.Context, id primitive.ObjectID) (*User, error)
	GetUserByEmail(ctx context.Context, email string) (*User, error)
	GetUserByGoogleId(ctx context.Context, googleId string) (*User, error)
	UpdateUser(ctx context.Context, user *User) error
	DeleteUser(ctx context.Context, user *User) error
	ExistsByEmail(ctx context.Context, email string) (bool, error)
}
