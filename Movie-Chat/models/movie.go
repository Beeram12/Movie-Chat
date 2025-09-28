package models

import (
	"context"
	"time"

	"go.mongodb.org/mongo-driver/bson/primitive"
)

type MovieStatus string

const (
	statusPending   MovieStatus = "pending_upload"
	statusAvailable MovieStatus = "available"
	StatusFailed    MovieStatus = "failed"
)

const (
	CollectionMovie = "movies"
)

type Movie struct {
	ID               primitive.ObjectID `bson:"_id,omitempty"`
	RoomID           primitive.ObjectID `bson:"roomId"`
	UploadedByUserID primitive.ObjectID `bson:"uploadedByUserId"`
	Title            string             `bson:"title"`
	GCSObjectKey     string             `bson:"gcsObjectKey"`
	FileSize         int64              `bson:"fileSize"`
	DurationSeconds  float64            `bson:"durationSeconds"`
	Status           MovieStatus        `bson:"status"`
	CreatedAt        time.Time          `bson:"createdAt"`
	UpdatedAt        time.Time          `bson:"updatedAt"`
}

type MovieRepository interface {
	Create(ctx context.Context, movie *Movie) error
	GetByID(ctx context.Context, id primitive.ObjectID) (*Movie, error)
	UpdateStatus(ctx context.Context, id primitive.ObjectID, status MovieStatus, fileSize int64) error
}

type MovieUsecase interface {
	InitiateUpload(ctx context.Context, roomID, userID primitive.ObjectID, fileName, contentType string) (presignedURL string, movieID primitive.ObjectID, err error)
	FinalizeUpload(ctx context.Context, movieID primitive.ObjectID, fileSize int64) error
}
