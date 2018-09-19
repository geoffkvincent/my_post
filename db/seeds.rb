categories = ['Games', 'Health & Fitness', 'Business', 'Lifestyle', 'Entertainment', 'Sports']


20.times do
  App.create(
    name: Faker::App.name,
    body: Faker::Lorem.paragraph(4),
    category: categories.sample,
  )
end