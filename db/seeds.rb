ActiveRecord::Base.transaction do
  ['common', Rails.env].each do |seedfile|
    seed_file = "#{Rails.root}/db/seeds/#{seedfile}.rb"
    if File.exists?(seed_file)
      puts "- - Seeding data from file: #{seedfile}"
      require seed_file
    end
  end
end