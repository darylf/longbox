models = ActiveRecord::Base.descendants
results = {}.tap do |result|
  models.each do |model|
    next if model.name == 'ActiveRecord::SchemaMigration'
    next if model.name == 'ActiveRecord::InternalMetadata'
    next if model.name == 'ApplicationRecord'

    result[model.name.pluralize] = model.count
  end
end

puts
puts
puts 'Summary'
puts '-----------------'
results.sort.each do |k, v|
  puts "#{k}: #{v}"
end
