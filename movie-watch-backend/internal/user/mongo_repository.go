package user

import (
	"context"
	"fmt"
	"movie-watch-backend/internal/models"

	"go.mongodb.org/mongo-driver/bson/primitive"
	"go.mongodb.org/mongo-driver/v2/bson"
	"go.mongodb.org/mongo-driver/v2/mongo"
)

type MongoUser struct {
	collection *mongo.Collection
}

// CreateUser implements User.
func (m *MongoUser) CreateUser(ctx context.Context, user *models.User) error {

}

// DeleteUser implements User.
func (m *MongoUser) DeleteUser(ctx context.Context, user *models.User) error {
	panic("unimplemented")
}

// ExistsByEmail implements User.
func (m *MongoUser) ExistsByEmail(ctx context.Context, email string) (bool, error) {
	filter := bson.M{
		"email": email,
	}
	result := m.collection.FindOne(ctx, filter)
	err := result.Err()

	if err != nil {
		if err == mongo.ErrNoDocuments {
			return false, nil
		}
		return false, fmt.Errorf("find user by email %s:%w", email, err)
	}
	return true, nil
}

// GetUserByEmail implements User.
func (m *MongoUser) GetUserByEmail(ctx context.Context, email string) (*models.User, error) {
	panic("unimplemented")
}

// GetUserByGoogleId implements User.
func (m *MongoUser) GetUserByGoogleId(ctx context.Context, googleId string) (*models.User, error) {
	panic("unimplemented")
}

// GetUserById implements User.
func (m *MongoUser) GetUserById(ctx context.Context, id primitive.ObjectID) (*models.User, error) {
	filter := bson.M{
		"_id": id,
	}
	var user models.User
	err := m.collection.FindOne(ctx, filter).Decode(&user)

	if err != nil {
		if err == mongo.ErrNoDocuments {
			return nil, nil
		}
		return nil, fmt.Errorf("Unable to fetch user by id %w", err)
	}
	return &user, nil
}

// UpdateUser implements User.
func (m *MongoUser) UpdateUser(ctx context.Context, user *models.User) error {
	panic("unimplemented")
}

func NewUser(db *mongo.Database) User {
	return &MongoUser{
		collection: db.Collection("users"),
	}
}
