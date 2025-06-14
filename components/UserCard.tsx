import { deleteUser } from '@/utils/api';
import { Button, Card, CardActions, CardContent, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Typography } from '@mui/material';
import Link from 'next/link';
import React from 'react';
import { User } from '../types/User';

interface UserCardProps {
  user: User;
}

const UserCard: React.FC<UserCardProps> = ({ user }) => {
  const [openDeleteConfirm, setOpenDeleteConfirm] = React.useState(false);
  const [selectedUser, setSelectedUser] = React.useState<User| null>();

  const handleClickDeleteUser = (selectedUser: User) => {
    setSelectedUser(selectedUser)
    setOpenDeleteConfirm(true);
  }

  const handleCloseDeleteConfirm = () => {
    setOpenDeleteConfirm(false);
    setSelectedUser(null)
  }

  // ユーザー削除実行
  const execDelete = async (selectedUser: User) => {
    const targetUserName = selectedUser.name;
    try {
      await deleteUser(selectedUser.id);
      alert(`ユーザー: ${targetUserName} を削除しました`)
      window.location.reload();
    } catch {
      alert(`ユーザー: ${targetUserName} の削除に失敗しました`)
    }
    handleCloseDeleteConfirm()
  }

  return (
    <Card sx={{ minWidth: 275, mb: 2 }}>
      <CardContent>
        <Typography variant="h5" component="div">
          {user.name}
        </Typography>
        <Typography color="text.secondary">
          {user.email}
        </Typography>
        <Typography variant="body2">
          役割: {user.role}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" component={Link} href={`/users/${user.id}/edit`}>編集</Button>
        <Button size="small" color="error" onClick={() => handleClickDeleteUser(user)}>削除</Button>
        <Dialog
          open={openDeleteConfirm}
          onClose={handleCloseDeleteConfirm}
          aria-labelledby="delete-confirm-dialog-title"
          aria-describedby="delete-confirm-dialog-description"
        >
        <DialogTitle id="delete-confirm-dialog-title">
          {"Delete User Confirm"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="delete-confirm-dialog-description" sx={{whiteSpace: 'pre-line' }}>
            {`
              User ID: ${selectedUser?.id} \n 
              User Name: ${selectedUser?.name} \n
              User Role: ${selectedUser?.role}
            `}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDeleteConfirm}>キャンセル</Button>
          <Button color="error" onClick={() => execDelete(selectedUser!)} autoFocus>削除</Button>
        </DialogActions>
      </Dialog>
      </CardActions>
    </Card>
  );
}

export default UserCard;