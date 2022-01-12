import React from "react";
import { useState } from "react";
import { useAppsCTX } from "../../../utilities/contexts";
import request from "../../../utilities/request";
import Button from "../../common/Button";
import { Input } from "../../common/Form";
import Modal, { ModalHeader, ModalFooter, ModalBody } from "../../common/Modal";

export default function AddProjectModal({ closeModal }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [website, setWebsite] = useState("");
  const [logoUrl, setLogoUrl] = useState("");
  const [description, setDescription] = useState("");
  const { setApps }: any = useAppsCTX();
  const addProject = async e => {
    e.preventDefault();
    try {
      const result = await request({
        method: "POST",
        path: "/applications",
        auth: true,
        data: {
          name,
          email,
          website,
          logoUrl,
          description,
        },
      });
      setApps(prev => [...prev, result.data]);
      closeModal();
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <Modal>
      <form onSubmit={addProject}>
        <ModalHeader>New Application</ModalHeader>
        <ModalBody>
          <div className='grid--gap'>
            <Input
              type='text'
              required
              label='Name *'
              placeholder='Crazy Monkey...'
              value={name}
              onChange={e => setName(e.target.value)}
            />
            <Input
              type='text'
              required
              label='email *'
              placeholder='info@crazy-monkey.com'
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
            <Input
              type='text'
              label='Website'
              placeholder='crazy-monkey.com'
              value={website}
              onChange={e => setWebsite(e.target.value)}
            />
            <Input
              type='text'
              label='Logo Url'
              placeholder='crazy-monkey.com/logo-url.png'
              value={logoUrl}
              onChange={e => setLogoUrl(e.target.value)}
            />
            <Input
              type='text-area'
              label='Description'
              value={description}
              onChange={e => setDescription(e.target.value)}
            />
          </div>
        </ModalBody>
        <ModalFooter>
          <Button type='submit' role='confirm-1--inline'>
            Create
          </Button>
          <Button role='warning-1--inline' onClick={closeModal}>
            Cancel
          </Button>
        </ModalFooter>
      </form>
    </Modal>
  );
}
