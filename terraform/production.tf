provider "aws" {
  region = "us-east-1"
}

locals {
  aws_access_key = "test"
  aws_secret_access_key = "aws_secret_key"
  github_branch = "github_branch"
  github_repository = "github_repository"
}

# Create the EC2 instance
resource "aws_instance" "example" {
  ami           = "ami-0c94855ba95c71c99"
  instance_type = "t2.micro"
  key_name      = "your-key-pair"
  user_data              = file("user_data.sh")
  tags = {
    Name = "example-instance"
  }
}

# Security Group for SSH access
resource "aws_security_group" "ssh" {
  name        = "ssh"
  description = "Allow SSH inbound traffic"

  ingress {
    from_port   = 22
    to_port     = 22
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  egress {
    from_port   = 0
    to_port     = 0
    protocol    = "-1"
    cidr_blocks = ["0.0.0.0/0"]
  }
}

# Security Group for HTTP access
resource "aws_security_group" "http" {
  name        = "http"
  description = "Allow HTTP inbound traffic"

  ingress {
    from_port   = 80
    to_port     = 80
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  egress {
    from_port   = 0
    to_port     = 0
    protocol    = "-1"
    cidr_blocks = ["0.0.0.0/0"]
  }
}

# Attach security groups to the EC2 instance
resource "aws_instance_security_group" "example" {
  instance_id      = aws_instance.example.id
  security_group_names = [
    aws_security_group.ssh.name,
    aws_security_group.http.name,
  ]
}
