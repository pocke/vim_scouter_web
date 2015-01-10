#!/usr/bin/env ruby

unless `git status --short`.chomp.empty?
  puts 'working directory does not clean!'
  exit 1
end


puts 'start deploy'
puts


files = %w[
  bower_components/bootstrap/dist/css/bootstrap.min.css
  bower_components/bootstrap/dist/js/bootstrap.min.js
  bower_components/jquery/dist/jquery.min.js
  bower_components/octicons/octicons/octicons.css
  bower_components/octicons/octicons/octicons.eot
  bower_components/octicons/octicons/octicons.ttf
  bower_components/octicons/octicons/octicons.woff
]

puts "start git add"
puts

files.each do |f|
  cmd =  "git add --force #{f}"
  unless system(cmd)
    puts "`#{cmd}` failed."
    exit 1
  end
end

puts 'start git commit'
puts

unless system 'git commit -m "deploy by script"'
  puts 'git commit failed.'
  exit 1
end

puts 'start git push'
puts

system 'git push --force origin gh-pages'

system 'git reset --hard @~'
