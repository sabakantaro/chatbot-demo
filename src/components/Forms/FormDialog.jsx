import React, {useState, useCallback} from "react";
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextInput from './TextInput'
import {WEBHOOK_URL} from '../../WebhookConfig'


const FormDialog = (props) => {
  const [name, setName] = useState([]);
  const [email, setEmail] = useState([]);
  const [discription, setDescription] = useState([]);

    const inputName = useCallback((event) => {
      setName(event.target.value)
    },[setName])

    const inputEmail = useCallback((event) => {
      setEmail(event.target.value)
    },[setEmail])

    const inputDiscription = useCallback((event) => {
      setDescription(event.target.value)
    },[setDescription])

    const submitForm = () => {
      const payload = {
        text: 'お問合せがありました\n' +
              'お名前:' + name + '\n' +
              'Email:'  + email + '\n' +
              'お問合せ内容:' + discription
      }

      fetch(WEBHOOK_URL, {
        method: 'POST',
        body: JSON.stringify(payload)
      }).then(() => {
        alert('送信が完了しました')
          setName("")
          setEmail("")
          setDescription("")
        return props.handleClose()
      })
    }

  return(
      <Dialog
      open={props.open}
      onClose={props.handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      >
      <DialogTitle id="alert-dialog-title">お問い合わせフォーム</DialogTitle>
      <DialogContent>
        <TextInput
          label={"お名前（必須）"}
          multiline={false}
          rows={1}
          value={name}
          type={"text"}
          onChange={inputName}
          />
          <TextInput
          label={"メールアドレス"}
          multiline={false}
          rows={1}
          value={email}
          type={"email"}
          onChange={inputEmail}
          />
          <TextInput
          label={"内容"}
          multiline={false}
          rows={5}
          value={discription}
          type={"text"}
          onChange={inputDiscription}
          />
      </DialogContent>
      <DialogActions>
        <Button onClick={props.handleClose}>キャンセル</Button>
        <Button onClick={submitForm} autoFocus>送信</Button>
      </DialogActions>
    </Dialog>
  )
}

export default FormDialog