# Blogging Platform Backend

## Overview

This project involves the development of a backend for a blogging platform. Users can create, update, and delete their own blogs, while an Admin has extended permissions to manage users and their blogs. The system includes secure authentication, role-based access control, and public APIs for accessing blogs with search, sort, and filter functionalities.

---

## Features

### User Roles

#### Admin
- Permissions:
  - Delete any blog.
  - Block any user.
- Restrictions:
  - Cannot update any blog.

#### User
- Permissions:
  - Register and log in.
  - Create blogs (only when logged in).
  - Update and delete their own blogs.
- Restrictions:
  - Cannot perform admin-specific actions.

---

### Authentication & Authorization
- **Authentication:**
  - Users must log in to perform create, update, and delete operations.
- **Authorization:**
  - Role-based access control ensures users and admins can perform actions within their permissions.

---

### Blog Management
- Users can:
  - Create new blogs.
  - Update and delete blogs they own.
- Admins can:
  - Delete any blog.

---


## Technologies

- **TypeScript**: For type-safe coding.
- **Node.js**: As the runtime environment.
- **Express.js**: For building RESTful APIs.
- **MongoDB** with **Mongoose**: For database management.

---

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Kamrul-Islam-171/blog-backend
   cd blog-backend
