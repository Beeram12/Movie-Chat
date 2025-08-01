package config

import (
	"log"
	"os"

	"github.com/joho/godotenv"
)

type Config struct{
	MongoURI string
	Database string
	Port string
}

func LoadConfig() *Config{

	err := godotenv.Load();

	if err != nil{
		log.Fatal("Error loading .env file")
	}

	mongoURI := os.Getenv("MONGO_URI")
	if mongoURI==" "{
		log.Fatal("Mongo uri has not been added in .env file")
	}

	port := os.Getenv("PORT")
	if port==" "{
		log.Fatal("Port number is missing")
	}

	mongoDB := os.Getenv("MONGO_DB")
	if mongoDB ==" "{
		log.Fatal("Database is not present")
	}

	return &Config{
		MongoURI: mongoURI,
		Database: mongoDB,
		Port: port,
	}
}
