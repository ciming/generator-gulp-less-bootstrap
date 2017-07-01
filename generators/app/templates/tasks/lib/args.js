import yargs from 'yargs';

const args = yargs

  .option('production', {
    boolean: true,
    default: false,
    describe: 'Minify all scripts and assets'
  })

  .option('watch', {
    boolean: true,
    default: false,
    describe: 'Watch all files and start a livereload server'
  })
  .option('sourcemaps', {
    describe: 'Force the creation of sourcemaps'
  })
  .option('port', {
    default: '8080',
    describe: 'The Server Prot'
  })
  .argv

// Use production flag for sourcemaps
// as a fallback
if(typeof args.sourcemaps === 'undefined'){
  args.sourcemaps = !args.production;
}

export default args;

