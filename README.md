Access & Record Management API (ARMA)
Overview

Access & Record Management API (ARMA) is an API-first, backend-focused MERN application designed to demonstrate how secure, production-ready REST APIs are built and consumed in real-world systems.

The platform provides authenticated users the ability to create and manage records, while enforcing role-based access control, workflow-driven state transitions, and strict API contracts. A minimal React frontend is included solely to demonstrate API consumption and end-to-end authentication flows—the backend remains the primary focus.

This project intentionally prioritizes backend correctness, security, and maintainability over UI complexity, reflecting how APIs are developed and maintained in enterprise, banking, and government IT environments.

## Key Objectives

- Design clean, versioned REST APIs using Node.js and Express
- Implement JWT-based authentication with refresh token rotation
- Enforce role-based access control (RBAC) across all endpoints
- Model workflow-driven resources with controlled state transitions
- Apply production-grade practices such as validation, error handling, and testing
- Demonstrate API consumption via a thin React client without frontend overreach

## Core Guarantees

- Secure access to APIs
- Role-based data access
- Valid workflow state transitions
- Consistent API responses

Record lifecycle:
CREATED → UNDER_REVIEW → APPROVED | REJECTED

## Core Problem

This API provides a secure backend for managing user-submitted records in a multi-user environment, ensuring strict access control, controlled workflow transitions, and consistent API behavior.

## Users

- **User**: Can authenticate, create records, and view only their own data.
- **Admin**: Can authenticate with elevated privileges, view all records, and manage record workflow states.

## Critical Data

- User identity and roles
- Record ownership and status
- Audit history of state changes

## Non-Negotiable Guarantees

- Unauthorized users must never access or modify data they do not own.
- Invalid workflow state transitions must be prevented.
- Authentication and authorization must be strictly enforced.
- API responses must be consistent and predictable under all conditions.
