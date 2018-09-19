categories = ['Games', 'Health & Fitness', 'Business', 'Lifestyle', 'Entertainment', 'Sports']


25.times do
  Post.create(
    name: Faker::Hipster.words,
    body: Faker::Simpsons.quote,
    category: categories.sample,
  )
end