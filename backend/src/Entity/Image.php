#[ORM\Entity()]
#[ORM\Table(name: 'images')]
class Image
{
#[ORM\Id]
#[ORM\GeneratedValue]
#[ORM\Column(type: 'integer')]
private $id;

#[ORM\Column(type: 'string')]
private $url;

#[ORM\ManyToOne(targetEntity: Article::class)]
#[ORM\JoinColumn(nullable: false)]
private $article;
}
