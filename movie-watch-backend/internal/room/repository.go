package room

import (
	"context"

	"go.mongodb.org/mongo-driver/bson/primitive"
)

type Room interface {
	CreateRoom(ctx context.Context, room *Room) error
	GetRoomId(ctx context.Context, id primitive.ObjectID) (*Room, error)
	UpdateRoom(ctx context.Context, room *Room) error
	DeleteRoom(ctx context.Context, room *Room) error
	AddParticipant(ctx context.Context, roomID primitive.ObjectID, userID primitive.ObjectID) error
	RemoveParticipant(ctx context.Context, roomID primitive.ObjectID, userID primitive.ObjectID) error
	SetCurrentTime(ctx context.Context, roomID primitive.ObjectID, currentTime float64) error
	SetIsPlaying(ctx context.Context, roomID primitive.ObjectID, isPlaying bool) error
	FindPublicRooms(ctx context.Context) ([]*Room, error)
	FindRoomsByHost(ctx context.Context, hostID primitive.ObjectID) ([]*Room, error)
}
