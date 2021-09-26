import express from 'express';
import { users } from '~/controllers';

const router = express.Router();

router.get('/', users.getUsers);

module.exports = router;
