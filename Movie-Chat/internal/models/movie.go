package models

import (
	"time"

	"go.mongodb.org/mongo-driver/bson/primitive"
)

type MovieStatus string

const (
	statusPending   MovieStatus = "pending_upload"
	statusAvailable MovieStatus = "available"
	StatusFailed    MovieStatus = "failed"
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
