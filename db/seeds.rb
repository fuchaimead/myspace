100.times do
  name = Faker::Simpsons.character
  bio = Faker::Lorem.paragraph(2)
  age = Faker::Number.between(15, 80)
  avatar = Faker::Avatar.image(name, '300x300', 'png', 'set2')
  Friend.create(name: name, bio: bio, age: age, avatar: avatar)
end
