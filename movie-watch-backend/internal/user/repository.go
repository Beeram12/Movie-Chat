package user

import (
	"context"
	"movie-watch-backend/internal/models"

	"go.mongodb.org/mongo-driver/bson/primitive"
)

type User interface {
	CreateUser(ctx context.Context, user *models.User) error
	GetUserById(ctx context.Context, id primitive.ObjectID) (*models.User, error)
	GetUserByEmail(ctx context.Context, email string) (*models.User, error)
	GetUserByGoogleId(ctx context.Context, googleId string) (*models.User, error)
	UpdateUser(ctx context.Context, user *models.User) error
	DeleteUser(ctx context.Context, user *models.User) error
	ExistsByEmail(ctx context.Context, email string) (bool, error)
}
