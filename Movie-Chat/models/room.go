package models

import (
	"context"
	"time"

	"go.mongodb.org/mongo-driver/bson/primitive"
)

const (
	CollectionRoom = "rooms"
)

type Room struct {
	ID           primitive.ObjectID   `bson:"_id,omitempty"`
	HostId       primitive.ObjectID   `bson:"hostId"`
	MembersId    []primitive.ObjectID `bson:"memberIds,omitempty"`
	RoomPassword string               `bson:"roomPassword,omitempty"`
	CreatedAt    time.Time            `bson:"createdAt"`
}

type RoomRepository interface {
	Create(ctx context.Context, room *Room) error
	Fetch(ctx context.Context) ([]Room, error)
	GetByRoomId(ctx context.Context, roomID primitive.ObjectID) (Room, error)
}

type RoomUsecase interface {
	CreateRoom(ctx context.Context, hostId primitive.ObjectID, password string) (*User, error)
	GetRoomByID(ctx context.Context, roomID primitive.ObjectID) (*Room, error)
	AddUserToRoom(ctx context.Context, roomID primitive.ObjectID, userID primitive.ObjectID) error
}
