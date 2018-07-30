# Infrastructure As Code

## Installation

Tools to install on the host machine:

[Ansible](https://docs.ansible.com/ansible/latest/installation_guide/intro_installation.html)
[Vagrant](https://www.vagrantup.com/downloads.html)

```sh
ansible-galaxy install geerlingguy.docker geerlingguy.pip stouts.python
```

## Commands

**Testing Locally**

```sh
# Bring up the VM and run the playbooks
vagrant up --provision

# SSH into the VM
vagrant ssh

# Remove the VM
vagrant destroy
```

**Executing on the servers**

```sh
# Test the connection to your servers
ansible -i hosts dev -m ping -u ubuntu --private-key=keys/mykeypair.pem -v

# Execute the playbook
ansible-playbook site.yml -u ubuntu --private-key=keys/mykeypair.pem -i hosts -l dev
```
