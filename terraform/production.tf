provider "aws" {
  region = "us-east-1"
  default_tags {
    tags = local.tags
  }
}

locals {
  tags = {
    "env"   = "dev"
    "owner" = "Arce"
    "cloud" = "AWS"
  }
}
# Create the EC2 instance
resource "aws_instance" "prod-instance" {
  ami                    = "ami-0c94855ba95c71c99"
  instance_type          = "t2.micro"
  key_name               = data.aws_key_pair.key.key_name
  user_data              = file("user_data.sh")
  vpc_security_group_ids = [aws_security_group.ssh.id, aws_security_group.https.id, aws_security_group.http.id]
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

# Security Group for HTTPS access
resource "aws_security_group" "https" {
  name        = "https"
  description = "Allow HTTPS inbound traffic"

  ingress {
    from_port   = 443
    to_port     = 443
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
