#[ORM\Entity()]
#[ORM\Table(name: 'articles')]
class Article
{
#[ORM\Id]
#[ORM\GeneratedValue]
#[ORM\Column(type: 'integer')]
private $id;

#[ORM\Column(type: 'string')]
private $title;

#[ORM\Column(type: 'text')]
private $content;

#[ORM\Column(type: 'datetime')]
private $createdAt;
}
