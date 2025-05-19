#[ORM\Entity()]
#[ORM\Table(name: 'admins')]
class Admin implements UserInterface
{
#[ORM\Id]
#[ORM\GeneratedValue]
#[ORM\Column(type: 'integer')]
private $id;

#[ORM\Column(type: 'string', unique: true)]
private $email;

#[ORM\Column(type: 'string')]
private $password;
}
