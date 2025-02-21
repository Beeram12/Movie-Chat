package model

import (
	"time"

	"go.mongodb.org/mongo-driver/bson/primitive"
)

type Room struct {
	ID           primitive.ObjectID   `json:"id,omitempty" bson:"_id,omitempty"`
	HostID       primitive.ObjectID   `json:"host_id" bson:"host_id" validate:"required"`
	Title        string               `json:"title" bson:"title" validate:"required"`
	VideoPath    string               `json:"video_path" bson:"video_path" validate:"required"`
	CurrentTime  float64              `json:"current_time" bson:"current_time" validate:"get=0"`
	IsPlaying    bool                 `json:"is_playing" bson:"is_playing"`
	Participants []primitive.ObjectID `json:"participants" bson:"participants"`
	CreatedAt    time.Time            `json:"created_at" bson:"created_at"`
	UpdatedAt    time.Time            `json:"updated_at" bson:"updated_at"`
}
