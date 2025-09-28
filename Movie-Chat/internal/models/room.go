package models

import (
	"time"

	"go.mongodb.org/mongo-driver/bson/primitive"
)

type Room struct {
	ID           primitive.ObjectID   `bson:"_id,omitempty"`
	HostId       primitive.ObjectID   `bson:"hostId"`
	MembersId    []primitive.ObjectID `bson:"memberIds,omitempty"`
	RoomPassword string               `bson:"roomPassword,omitempty"`
	CreatedAt    time.Time            `bson:"createdAt"`
}
