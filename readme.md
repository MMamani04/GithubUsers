### Add "users" read token in:
src/services/users.ts

    const config = {
      headers: {Authentication: 'Bearer [TOKEN]'},
    };